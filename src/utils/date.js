import moment from 'moment'

export default {
    methods: {
        toFormatDate(date, format = "YYYY-MM-DD HH:mm:ss") {
            let newDate = moment(date).format(format);
            return newDate;
        },

        fromNow(date) {
            return moment.utc(date).fromNow()
        },
    }
}