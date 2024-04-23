import { reactive } from "vue";

export const store = reactive({
    headerInfo: [
        {
            text: 'HOME',
            link: '#'
        },
        {
            text: 'BLOG',
            link: '#'
        },
        {
            text: 'PAGES ⌄',
            link: '#'
        },
        {
            text: 'ABOUT',
            link: '#'
        },
        {
            text: 'CONTACTS',
            link: '#'
        },
        {
            text: 'GALLERY',
            link: '#'
        },
        {
            text: 'SHOP ⌄',
            link: '#'
        },
    ],
    headerSocials:[
        {
            icon: 'fa-facebook',
            link: 'https://facebook.com/'
        },
        {
            icon: 'fa-twitter',
            link: 'https://twitter.com/'
        },
        {
            icon: 'fa-youtube',
            link: 'https://youtube.com/'
        },
        {
            icon: 'fa-instagram',
            link: 'https://instagram.com/'
        },
    ]

});