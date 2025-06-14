interface Skill {
  name: string;
  icon: string;
  level: number; // 1-10
}

const SkillBar = ({ level }: { level: number }) => {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }, (_, index) => (
        <div
          key={index}
          className={`w-2 h-2 rounded-full border ${index < level
            ? 'bg-green-500'
            : ''
            }`}
        />
      ))}
    </div>
  );
};

const SkillItem = ({ skill }: { skill: Skill }) => {
  return (
    <div className="flex items-center gap-2 p-1.5 bg-matrix-dark/50 border border-matrix-secondary/30 rounded backdrop-blur-sm hover:border-matrix-primary/50 transition-colors duration-300 h-8 w-full">
      <div className="text-xs flex-shrink-0">{skill.icon}</div>
      <div className="text-xs font-medium text-matrix-primary text-shadow-matrix-glow-xs truncate flex-1 min-w-0">
        {skill.name}
      </div>
      <div className="flex-shrink-0">
        <SkillBar level={skill.level} />
      </div>
    </div>
  );
};

const SkillsPanel = () => {
  const skills: Skill[] = [
    { name: 'TypeScript', icon: '📘', level: 4 },
    { name: 'React', icon: '⚛️', level: 4 },
    { name: 'Kubernetes', icon: '☸️', level: 3 },
    { name: 'Git', icon: '🐙', level: 4 },
    { name: 'Node.js', icon: '🟢', level: 4 },
    { name: 'C#', icon: '🔵', level: 3 },
    { name: 'Go', icon: '🐹', level: 2 },
    { name: 'Python', icon: '🐍', level: 3 },
    { name: 'F/E UX', icon: '🎨', level: 3 },
    { name: 'Angular', icon: '🅰️', level: 4 },
    { name: 'NextJS', icon: '🔗', level: 3 },
    { name: 'AWS', icon: '☁️', level: 3 },
    { name: 'Docker', icon: '🐳', level: 4 },
    { name: 'CI/CD', icon: '🔄', level: 3 },
  ];

  return (
    <div className="mb-6 last:mb-0">
      <h3 className="text-lg font-semibold text-matrix-primary mb-4 border-b border-matrix-secondary pb-2 text-shadow-matrix-glow-sm sm:text-base">
        Skills
      </h3>
      <div className="grid gap-1 lg:grid-cols-3 md:grid-cols-2">
        {skills.map((skill, index) => (
          <SkillItem key={index} skill={skill} />
        ))}
      </div>
    </div>
  );
};

export default SkillsPanel;
