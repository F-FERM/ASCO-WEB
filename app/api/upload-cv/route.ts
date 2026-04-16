import { NextRequest, NextResponse } from "next/server";
import { transporter } from "@/lib/mailer";

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const file = formData.get("file") as File;

    if (!file) {
      return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
    }

    const allowedTypes = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];

    if (!allowedTypes.includes(file.type)) {
      return NextResponse.json(
        { error: "Only PDF/DOC/DOCX allowed" },
        { status: 400 },
      );
    }

    const fileExtension = file.name.split(".").pop()?.toLowerCase() || "pdf";

    const originalName = file.name;

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const fileSizeKB = (buffer.length / 1024).toFixed(2);

    const submissionDate = new Date().toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });

    const emailHTML = `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>New CV Submission</title>

<style>
  body {
    margin: 0;
    padding: 0;
    background: #f4f6f9;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  }

  .container {
    max-width: 600px;
    margin: 30px auto;
    background: #ffffff;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 10px 30px rgba(0,0,0,0.08);
  }

  .header {
    background: linear-gradient(135deg, #4f46e5, #7c3aed);
    color: white;
    padding: 30px;
    text-align: center;
  }

  .header h1 {
    margin: 0;
    font-size: 22px;
  }

  .header p {
    margin: 5px 0 0;
    font-size: 13px;
    opacity: 0.9;
  }

  .content {
    padding: 30px;
  }

  .card {
    border: 1px solid #e5e7eb;
    border-radius: 8px;
    padding: 20px;
    margin-top: 20px;
    background: #fafafa;
  }

  .file-name {
    font-size: 16px;
    font-weight: 600;
    color: #111827;
    margin-bottom: 8px;
  }

  .meta {
    font-size: 13px;
    color: #6b7280;
    margin-bottom: 5px;
  }

  .badge {
    display: inline-block;
    margin-top: 10px;
    padding: 6px 10px;
    background: #dcfce7;
    color: #166534;
    border-radius: 6px;
    font-size: 12px;
    font-weight: 500;
  }

  .attachment-note {
    margin-top: 25px;
    padding: 15px;
    background: #eef2ff;
    border-left: 4px solid #6366f1;
    font-size: 13px;
    color: #3730a3;
  }

  .footer {
    text-align: center;
    padding: 20px;
    font-size: 12px;
    color: #9ca3af;
    border-top: 1px solid #f3f4f6;
  }

  @media (max-width: 600px) {
    .container {
      margin: 0;
      border-radius: 0;
    }
  }
</style>
</head>

<body>

<div class="container">

  <div class="header">
    <h1>📄 New CV Submitted</h1>
    <p>Job Application Notification</p>
  </div>

  <div class="content">

    <p>Hello,</p>
    <p>A new candidate has submitted their CV. Details are below:</p>

    <div class="card">
      <div class="file-name">${originalName}</div>

      <div class="meta"><strong>Size:</strong> ${fileSizeKB} KB</div>
      <div class="meta"><strong>Type:</strong> ${fileExtension.toUpperCase()}</div>
      <div class="meta"><strong>Submitted:</strong> ${submissionDate}</div>

      <div class="badge">✔ Successfully Received</div>
    </div>

    <div class="attachment-note">
      📎 The CV is attached to this email. Please download and review it.
    </div>

  </div>

  <div class="footer">
    © ${new Date().getFullYear()} Recruitment System. All rights reserved.
  </div>

</div>

</body>
</html>
`;

    transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.RECEIVER_EMAIL,
      subject: `📄 New CV Submission - ${originalName}`,
      html: emailHTML,
      attachments: [
        {
          filename: originalName,
          content: buffer,
          contentType: file.type,
        },
      ],
    });

    return NextResponse.json({
      success: true,
      message: "CV sent successfully via email",
    });
  } catch (error) {
    console.error("UPLOAD ERROR:", error);
    return NextResponse.json(
      { error: "Upload or Email failed" },
      { status: 500 },
    );
  }
}
