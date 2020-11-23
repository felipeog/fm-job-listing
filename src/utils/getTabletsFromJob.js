export function getTabletsFromJob({ role, level, languages, tools }) {
  const roleTablet = { value: role, filter: 'role' }
  const levelTablet = { value: level, filter: 'level' }
  const languagesTablets = languages.map((language) => ({
    value: language,
    filter: 'languages',
  }))
  const toolsTablets = tools.map((tool) => ({
    value: tool,
    filter: 'tools',
  }))
  const tablets = [
    roleTablet,
    levelTablet,
    ...languagesTablets,
    ...toolsTablets,
  ]

  return tablets
}
