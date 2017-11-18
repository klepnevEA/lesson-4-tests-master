# Homework 4

Скопируйте этот репозиторий.

[Пример работы](http://5a0ad5aadf99536a88d36117.tycoon-moneys-57286.netlify.com).

Задачи:

1. Создать компонент `Switcher`, который рендерит только одного ребенка, а так же показывает список имен всех детей, и если кликнуть на имя одного из детей — компонент покажет другого ребенка.
2. Создать компонент `CardNumberHolder` который будет хранить номер карты и рендерить компонент `CardNumberInput`.
3. Создать компонент `CardNumberInput`, который будет возвращать input и форматировать его значение при вводе, расставляя пробелы после каждого 4 символа, и нормализовать значение удаляя пробелы, при измении и передавая нормализованную строку в `props.onChange`.
4. Создать компонент `ModalButton`, который выводит кнопку, при нажатии на которую появляется модальное окно, которое должно быть отрендерено в `#modal`. В модальном окне должна быть кнопка закрытия окна, при нажатии на которую окно закрывается.
5. Тесты должны исполнятся.

Для установления имени у компоненты используйте ```static displayName = 'Name'```.
Для работы с детьми нужно использовать методы `React.Children.map` и `React.Children.toArray`.
Модальное окно нужно выводить с помощью порталов.
#   l e s s o n - 4 - t e s t s - m a s t e r  
 