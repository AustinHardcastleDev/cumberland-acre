export const SITE = {
  name: "Cumberland Acre",
  phoneDisplay: "615-212-5101",
  phoneHref: "tel:6152125101",
  email: "hello@cumberlandacre.com",
  from: "Cumberland Acre <cumberland-acre@notifications.hometeamtechnology.com>",
  url: "https://cumberlandacre.com",
  region: "Middle Tennessee",
} as const;

export const PROPERTY_TYPES = [
  "House",
  "Vacant land",
  "House + acreage",
  "Not sure",
] as const;

export const TIMELINES = [
  "As soon as possible",
  "Next few months",
  "Sometime this year",
  "Only want a number",
] as const;

export const SOURCES = [
  "Postcard in the mail",
  "Word of mouth",
  "Saw one of your projects",
  "Found you online",
] as const;
