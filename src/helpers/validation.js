export function validation(card) {
    if (card.name && card.section && card.subsection && card.description && card.shortDescription && card.image) {
        return true
    }
}