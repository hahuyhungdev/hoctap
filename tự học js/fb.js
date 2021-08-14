const ACCESS_TOKEN = 'EAAAAZAw4FxQIBAKfNfKjltzkzi5cEeLYGkl3vCA33uHXrHUCtIHTSinwptvJ5LxVAjRat1XwDnMmXTr9w0OGk1z9TPJvSVWO4wtufkC63EDggIt2tSOjlPP7wZCIAEnFEKQnsWlcuYip0nAy4FhDKevfh2rSZAv43He52DAKXo9iZBUnV1QPlxuJzsLOe9oZD';

const LIST_IGNORE = [100015110864439];
const getListFriend = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const res = await fetch(
                `https://graph.facebook.com/me/friends?limit=5000&access_token=${ACCESS_TOKEN}`
            );
            const resParse = await res.json();
            const reduce = resParse.data.map(item => Number(item.id));
            resolve(reduce);
        } catch (error) {
            reject(error);
        }
    });
};

const block = listFriend => {
    const ID_USER = require('RelayAPIConfigDefaults').actorID;
    const fb_dtsg = require('DTSGInitData').token;

    const body = new URLSearchParams();
    const variables = {
        input: {
            blocked_participants: listFriend,
            actor_id: ID_USER,
            client_mutation_id: 6,
        },
    };

    body.append('__a', 1);
    body.append('doc_id', 4145463812202174);
    body.append('fb_dtsg', fb_dtsg);
    body.append('fb_api_caller_class', 'RelayModern');
    body.append(
        'fb_api_req_friendly_name',
        'StoriesCometPrivacySelectorBlockedParticipantsMutation'
    );
    body.append('variables', JSON.stringify(variables));

    return fetch('https://www.facebook.com/api/graphql/', {
        method: 'POST',
        body,
    });
};

Array.prototype.diff = function (arr) {
    return this.filter(i => arr.indexOf(i) < 0);
};

(async () => {
    try {
        const listFriend = await getListFriend();
        const diff = listFriend.diff(LIST_IGNORE);
        await block(diff);
        console.log("Tấn công crush thành công (●'◡'●)");
        // block([]);
    } catch (error) {
        console.log(error);
    }
})();