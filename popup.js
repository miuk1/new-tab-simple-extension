document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('openNewTab').addEventListener('click', function () {
        chrome.tabs.create({});
    });

    document.getElementById('showAllTabs').addEventListener('click', function () {
        chrome.tabs.query({}, function (tabs) {
            let list = document.createElement('ul');
            for (let i = 0; i < tabs.length; i++) {
                let listItem = document.createElement('li');
                listItem.innerHTML = tabs[i].url + '<br>' + tabs[i].title + '<br>' + tabs[i].id + '<br>';
                list.appendChild(listItem);
            }
            document.getElementById('activeTabs').innerHTML = '';
            document.getElementById('activeTabs').appendChild(list);
        });
    });

    document.getElementById('showOnlyActiveTabs').addEventListener('click', function () {
        chrome.tabs.query({ active: true }, function (tabs) {
            let list = document.createElement('ul');
            for (let i = 0; i < tabs.length; i++) {
                let listItem = document.createElement('li');
                listItem.innerHTML = tabs[i].url + '<br>' + tabs[i].title + '<br>' + tabs[i].id + '<br>';
                list.appendChild(listItem);
            }
            document.getElementById('activeTabs').innerHTML = '';
            document.getElementById('activeTabs').appendChild(list);
        });
    });

    document.getElementById('clear').addEventListener('click', function () {
        document.getElementById('activeTabs').innerHTML = '';
    });

});
