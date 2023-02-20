const socials = {
  github: {
    unicode: "\u{1f419}",
    url: "https://github.com/tif-calin",
  },
  linkedin: {
    unicode: "\u{1f4bb}",
    url: "https://www.linkedin.com/in/tif-calin/",
  },
  email: {
    unicode: "\u{1f4e7}",
    url: "mailto:culitif.g@gmail.com",
  },
};

const Socials = () => {
  return (
    <div class="group flex gap-3 text-3xl">
      {Object.entries(socials).map(([key, { unicode, url }]) => (
        <a
          key={key}
          /* TODO: find a better way to manage TW specificity than `!important`
                                                             - culi, '23.02feb */
          class="transition group-hover:opacity-50 !hover:opacity-100"
          title={key}
          href={url}
        >
          {unicode}
        </a>
      ))}
    </div>
  );
};

export default Socials;
