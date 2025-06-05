/**
 * Gera identificador único aleatório
 *
 * @return {Number} Id único
 */
export function geraIdUnico(length = 10): string {
  const randomString = Math.random().toString(36).slice(2)
  return randomString.substring(0, length)
}
