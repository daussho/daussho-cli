import slugify from "slugify";

export function slugifier(list: string[]) {
  let res = {} as Record<string, string>;

  list.forEach((str) => {
    res = {
      ...res,
      [generateSlug(str)]: str,
    };
  });

  console.log({ res });
}

function generateSlug(str: string) {
  const result = slugify(str, {
    replacement: "-", // replace spaces with replacement character, defaults to `-`
    remove: undefined, // remove characters that match regex, defaults to `undefined`
    lower: true, // convert to lower case, defaults to `false`
    strict: true, // strip special characters except replacement, defaults to `false`
    locale: "vi", // language code of the locale to use
    trim: true, // trim leading and trailing replacement chars, defaults to `true`
  });

  return result;
}
