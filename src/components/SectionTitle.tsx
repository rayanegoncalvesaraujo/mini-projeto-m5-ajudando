type Props = {
  icon: string;
  title: string;
};

export const SectionTitle = ({ icon, title }: Props) => (
  <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
    <span className="text-3xl">{icon}</span> {title}
  </h3>
);
