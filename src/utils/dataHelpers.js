import lodash from 'lodash'
import formatDistanceToNowStrict from 'date-fns/formatDistanceToNowStrict'


export function prepareData(data) {
    const logs = data.filter(log => log.actor?.account?.name)

    const allUsers = logs.map(log => ({
        id: log.actor?.account?.name,
        name: log.actor?.name,
    }))

    const users = lodash.uniqBy(allUsers, 'id')

    return {
        logs,
        users
    }

}

export function getUserActivity(data, userId) {
    const activity = data.filter(log => log.actor?.account?.name === userId);

    return activity.reverse()
}

export function getTimeFromNow(timestamp) {
    return formatDistanceToNowStrict(new Date(timestamp))
}

