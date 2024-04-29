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
            text: 'PAGES',
            link: '#',
            children: [
                {
                    link: '#service1',
                    name: 'SERVICE'
                },
                {
                    link: '#service2',
                    name: 'OUR WORK FLOW'
                },
                {
                    link: '#service3',
                    name: 'VIDEO THUMBNAIL TYPE'
                },
            ]
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
            text: 'SHOP',
            link: '#',
            children: [
                {
                    link: '#service1',
                    name: 'SERVICE'
                },
                {
                    link: '#service2',
                    name: 'OUR WORK FLOW'
                },
                {
                    link: '#service3',
                    name: 'VIDEO THUMBNAIL TYPE'
                },
            ]
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
    ],
    footerInformation:[
        {
            text: 'Product Support',
            link: '#'
        },
        {
            text: 'Checkout',
            link: '#'
        },
        {
            text: 'Report Abuse',
            link: '#'
        },
        {
            text: 'Redeem Voucher',
            link: '#'
        },
        {
            text: 'Order Status',
            link: '#'
        },
    ],
    footerUsefulLinks:[
        {
            text: 'Policies & Rules',
            link: '#'
        },
        {
            text: 'Privacy Policy',
            link: '#'
        },
        {
            text: 'License Policy',
            link: '#'
        },
        {
            text: 'My Account',
            link: '#'
        },
        {
            text: 'Locality',
            link: '#'
        },
    ],

});