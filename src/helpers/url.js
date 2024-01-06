import {filter} from "../shared/data/filter";

class Url {
    _buildUrlFromSection(section) {
        // eslint-disable-next-line default-case
        switch (section) {
            case 'Узоры вязания':
                return 'knitting-patterns'
            case 'Вязание для детей':
                return 'knitting-children'
            case 'Вязание для женщин':
                return 'knitting-women'
            case 'Вязание для мужчин':
                return 'knitting-men'
            case 'Вязание для дома':
                return 'knitting-home'
        }
    }

    _buildUrlFromSubSection(section, subsection) {
        for (let i = 0; i < filter.length; i++) {
            if (filter[i].title === section) {
                for (let j = 0; j < filter[i].items.length; j++) {
                    if (filter[i].items[j].title === subsection) return filter[i].items[j].url
                }
            }
        }
    }

    getSectionFromUrl(section) {
        // eslint-disable-next-line default-case
        switch (section) {
            case 'knitting-patterns':
                return 'Узоры вязания'
            case 'knitting-children':
                return 'Вязание для детей'
            case 'knitting-women':
                return 'Вязание для женщин'
            case 'knitting-men':
                return 'Вязание для мужчин'
            case 'knitting-home':
                return 'Вязание для дома'
        }
    }

    getSubSectionFromUrl(section, subsection) {
        for (let i = 0; i < filter.length; i++) {
            if (filter[i].title === this.getSectionFromUrl(section)) {
                for (let j = 0; j < filter[i].items.length; j++) {
                    if (filter[i].items[j].url === subsection) return filter[i].items[j].title
                }
            }
        }
    }

    getCorrectUrl(section, subsection) {
        return `/${this._buildUrlFromSection(section)}/${this._buildUrlFromSubSection(section, subsection)}`
    }
}

export default new Url()