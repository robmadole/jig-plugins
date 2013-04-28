import pickle
from bs4 import BeautifulSoup

import requests

FACTS_URL = 'http://www.chucknorrisfacts.com/chuck-norris-top-50-facts'


def main(url):
    response = requests.get(url)

    soup = BeautifulSoup(response.content)

    elements = soup.select('#content .item-list .views-field-title .field-content')

    items = []
    for el in elements:
        items.append(el.text.strip())

    print(pickle.dumps(items))

if __name__ == '__main__':
    main(FACTS_URL)
