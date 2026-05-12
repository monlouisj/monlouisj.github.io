import type { APIRoute } from 'astro';
import resume from '../../resume.json';

export const GET: APIRoute = () => {
  const { personal, experience, skills, portfolio } = resume;

  const lines: string[] = [];

  // Identity
  lines.push(`# ${personal.name}`);
  lines.push(`> ${personal.title} — ${personal.location}`);
  lines.push('');

  // Contact
  lines.push(`- Email: ${personal.email}`);
  if (personal.social?.github)   lines.push(`- GitHub: ${personal.social.github}`);
  if (personal.social?.linkedin) lines.push(`- LinkedIn: ${personal.social.linkedin}`);
  lines.push('');

  // Skills
  lines.push('## Compétences');
  lines.push(`- Développement: ${skills.development.join(', ')}`);
  lines.push(`- Autres: ${skills.other.join(', ')}`);
  lines.push('');

  // Experience
  lines.push('## Expérience professionnelle');
  for (const job of experience) {
    const company = job.company ?? (job.companies ? job.companies.join(', ') : '');
    const location = job.location ? ` — ${job.location}` : '';
    lines.push(`### ${job.period} · ${job.title}${company ? ` @ ${company}${location}` : ''}`);
    if (job.projects) {
      for (const project of job.projects) {
        lines.push(`- ${project.description}${project.stack ? ` (${(project.stack as string[]).join(', ')})` : ''}`);
      }
    }
    lines.push('');
  }

  // Portfolio
  lines.push('## Portfolio');
  for (const item of portfolio) {
    const url = item.url ?? (item.urls ? item.urls[0] : '');
    lines.push(`### ${item.name}`);
    lines.push(item.description);
    if (url) lines.push(url);
    lines.push('');
  }

  return new Response(lines.join('\n'), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
