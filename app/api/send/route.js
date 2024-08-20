import Email from "@/src/emails/email-template";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  const { email, sender } = await request.json();

  try {
    console.log("NOW ITS MY TURN BITCH");

    const { data, error } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "imbizman81@gmail.com",
      subject: `${email} just subscribed, ${sender}`,
      react: <Email />,
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
