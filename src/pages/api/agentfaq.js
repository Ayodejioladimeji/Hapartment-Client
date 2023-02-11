import { agentfaq } from "@/lib/faq";

export default function agentfaqs(req, res) {
  res.status(200).json(agentfaq);
}
