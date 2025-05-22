const PubSub = {
    _subscribers: {"update" : []},
    _subscribersCount: 0,

    subscribe(event, callback) {
        if (!this._subscribers[event]) {
            this._subscribers[event] = [];
        }
        this._subscribers[event].push(callback);
    },

    publish(event, ...data) {
        if (this._subscribers[event]) {
            this._subscribers[event].forEach(callback => callback(...data));
        }
    }
};

const expenses = {
    list: [],
    addExpense(...exp) {
        this.list.push(...exp);
        this.publish("update", this.list);
    },
    removeExpense(id) {
        this.list = this.list.filter(e => e.id !== id);
        this.publish("update", this.list);
    },
 
    filterExpense(input) {
        const result = this.list.filter(exp => {
            if (exp.title.toLowerCase().includes(input.toLowerCase()) ||
                exp.category.toLowerCase().includes(input.toLowerCase()) ||
                exp.date.toLowerCase().includes(input.toLowerCase()) /*||
                exp.amount == input*/
                ) {
                return true;
            }
        });
        this.publish("update", result);
    },

    clear() {
        this.list = [];
        this.publish("update", this.list);
    }
}

Object.assign(expenses, PubSub);

export default expenses;