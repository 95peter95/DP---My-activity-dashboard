import lodash from 'lodash'

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

    return activity;
}