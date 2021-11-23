###### Опишите ещё не менее 7 тест кейсов для запроса из задания 1. Своими словами в произвольной, но понятной форме.
    1. Загружаются все посты запросом "GET https://jsonplaceholder.typicode.com/posts"
    2. Загружается 1 пост "GET https://jsonplaceholder.typicode.com/posts/1"
    3. Загружается 1 пост по его id "GET https://jsonplaceholder.typicode.com/posts?id=1"
    4. Все сообщения при неверном параметре "GET https://jsonplaceholder.typicode.com/posts?foo=bar"
    5. Пустой список при неверном параметре userId "GET https://jsonplaceholder.typicode.com/posts?userId=101"
    6. Пустой список при неверном параметре title "GET https://jsonplaceholder.typicode.com/posts?title=11wrong%20title11"
    7. Пустой список при попытке SQL-инъекции title "GET https://jsonplaceholder.typicode.com/posts?userId=1'"
    8. Пустой список при попытке XSS-атаки "GET https://jsonplaceholder.typicode.com/posts?userId=1'"
    
###### Предположим, что GET  /posts/101  вернул statusСode = 404, в требованиях указано, что в случае отсутствия нужного postId возвращать пустой список. Представьте, что вам нужно описать эту проблему в баг-трекинговой системе, чтобы разработчик смог её воспроизвести и починить. Приведите составленное описание. 

    BUG-1: GET /posts/101  возвращает statusСode 404
    Предусловие: Открыт браузер и DevTools
    Шаги: Ввести в адресную строку https://jsonplaceholder.typicode.com/posts/101
    Ожидаемый результат: statusСode 200, пустой список
    Фактический результат: statusСode 404
    Скриншот:
![status code 404](/404.png)
