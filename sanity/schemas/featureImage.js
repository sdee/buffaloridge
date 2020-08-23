export default {
  name: "featureImage",
  type: "document",
  title: "featureImage",
  initialValue: () => ({
    vertical: false,
  }),
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
      description: "Internal",
    },
    {
      name: "caption",
      type: "string",
      title: "Caption",
      description: "Displayed",
    },
    {
      name: "section",
      type: "string",
      title: "Section",
    },
    {
      name: "image",
      type: "image",
      title: "Image",
    },
    { name: "order", type: "number", title: "Order" },
    { name: "vertical", type: "boolean", title: "Vertical?"}
  ],
  preview: {
    select: {
      title: "title",
      media: "image",
    },
  },
};
