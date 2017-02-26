export function typeNameToFuncName (typeName) {
  const parts = typeName.split('_')
  return parts.map((part, i) => {
    if (i !== 0 && part.length)
      return part[0].toUpperCase() + part.slice(1).toLowerCase()
    else
      return part.toLowerCase()
  }).join('')
}
