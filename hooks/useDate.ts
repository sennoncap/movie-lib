const useDate = () => {
    const formatDate = (timestamp: string) => {
        /*
         * returns: Apr 01, 2022
         */

        if (!timestamp) return null

        const time = new Date(timestamp)
        const date = time.getDate().toString().padStart(2, '0')

        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        const month = months[time.getMonth()]

        const year = time.getFullYear()

        return `${month} ${date}, ${year}`
    }
    const getYear = (timestamp: string) => {
        /*
         * returns: 1999
         */

        if (!timestamp) return null

        const time = new Date(timestamp)

        return time.getFullYear()
    }

    return { formatDate, getYear }
}

export default useDate
