const slug = (str: string): string => {
  if (!str) return ""

  return str
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '')
}

export default slug