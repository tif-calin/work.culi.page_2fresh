interface ToolsSectionProps {
  contentClass?: string;
}

const ToolsSection = ({ contentClass }: ToolsSectionProps) => {
  return (
    <section class="bg-red-500 text-white">
      <div class={contentClass}>tool tool tool</div>
    </section>
  );
};

export default ToolsSection;
