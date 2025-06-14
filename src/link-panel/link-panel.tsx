import React from 'react';

interface LinkItem {
  id: string;
  label: string;
  url: string;
  icon: string;
  alt: string;
}

interface LinkPanelProps {
  links?: LinkItem[];
}

const defaultLinks: LinkItem[] = [
  {
    id: 'github',
    label: 'GitHub',
    url: 'https://github.com/drozdowo',
    icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/github.svg',
    alt: 'GitHub'
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    url: 'https://ca.linkedin.com/in/odroz',
    icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/linkedin.svg',
    alt: 'LinkedIn'
  },
  {
    id: 'email',
    label: 'Email',
    url: 'mailto:contact@example.com',
    icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/gmail.svg',
    alt: 'Email'
  },
  {
    id: 'resume',
    label: 'Resume',
    url: 'https://google.com/',
    icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/readme.svg',
    alt: 'Resume'
  }
];

const LinkPanel: React.FC<LinkPanelProps> = ({ links = defaultLinks }) => {
  return (
    <div className="mb-6 min-w-32 last:mb-0 lg:min-w-64">
      <h3 className="text-lg font-semibold text-matrix-primary mb-3 border-b border-matrix-secondary pb-2 text-shadow-matrix-glow-sm sm:text-base">
        Links
      </h3>
      <div className="space-y-2">
        {links.map((link) => (
          <a
            key={link.id}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center p-2 border border-matrix-secondary rounded-md bg-transparent hover:bg-matrix-panel hover:border-matrix-primary hover:shadow-matrix transition-all duration-200 ease-in-out group"
          >
            <div className="w-8 h-8 mr-3 flex-shrink-0 flex items-center justify-center">
              <img
                src={link.icon}
                alt={link.alt}
                className="w-8 h-8 filter brightness-0 invert opacity-70 group-hover:opacity-100 transition-opacity duration-200"
                style={{
                  filter: 'brightness(0) saturate(100%) invert(84%) sepia(100%) saturate(2174%) hue-rotate(88deg) brightness(118%) contrast(101%)'
                }}
              />
            </div>
            <span className="text-sm text-matrix-tertiary group-hover:text-matrix-primary text-shadow-matrix-glow-xs group-hover:text-shadow-matrix-glow-sm transition-all duration-200 sm:text-xs">
              {link.label}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default LinkPanel;
