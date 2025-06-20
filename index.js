/**
 * やることリスト
 * title: やることのタイトル
 * isDone: 達成状況　trueになると、チェックが着く
 */
let tasks = [
    { title: "お洗濯", isDone: false },
]

/**
 * [学生1]
 * 引数で与えられるタイトルで「やること」が作成されるように修正してください。
 * 
 * 注) 登録ボタンを押したときに、この関数が呼ばれる処理は既に書かれています。
 * 
 */
function addTask(title) {
    const task = { isDone: false }

    // やることのタイトルを設定(このままだと、すべてのタイトルがHello Worldになってしまう！)
    task.title = title

    // 以降は無視して良い
    tasks.push(task);
    drawTask(task, tasks.length - 1);
}

/**
 * [学生2]
 * 「チェックボックス」をクリックしたときに、
 * 引数で与えられる「やること」の達成状態(isDone)を、
 * 現在の状態と反対になるように更新してください。
 * 
 * 注) クリックしたときに、この関数が呼ばれる処理は既に書かれています。
 * 
 * 例:
 * before   |   after
 * --------------------
 * true     |   false
 * false    |   true
 */
function onUpdateIsDone(task) {
    console.log("チェックボックスがクリックされました。", task);

    // 達成状態を更新(このままだと、現在の達成状態で更新されてしまう！)
    const currentValue = task.isDone;
    task.isDone = currentValue;

    return task;
}

/**
 * [学生3]
 * 「タスクのタイトル」をクリックしたときに、
 * 引数で与えられる「やること」の達成状態(isDone)を、
 * 現在の状態と反対になるように更新してください。
 * 
 * 注) クリックしたときに、この関数が呼ばれる処理は既に書かれています。
 * 
 * 例:
 * before   |   after
 * --------------------
 * true     |   false
 * false    |   true
 */
function onTaskTitleClicked(task) {
    console.log("タイトルがクリックされました。", task);

    // 達成状態を更新(このままだと、現在の達成状態で更新されてしまう！)
    const currentValue = task.isDone;
    task.isDone = currentValue;

    return task;
}