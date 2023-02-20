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
    <div class="flex gap-3 text-3xl [&_>_*]:opacity-100 hover:[&_>_a]:opacity-50">
      {Object.entries(socials).map(([key, { unicode, url }]) => (
        <a key={key} class="transition" title={key} href={url}>
          {unicode}
        </a>
      ))}
    </div>
  );
};

export default Socials;
