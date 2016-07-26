export let TodoSchema: any = new SimpleSchema({
  _id: {
    type: String,
    label: 'Todo Id'
  },
  owner: {
    type: String,
    label: 'The todo owner'
  },
  contents: {
    type: String,
    label: 'The contents of the Todo',
    trim: true,
    min: 5,
    max: 255
  },
  completed: {
    type: Boolean,
    label: 'is the Todo completed Flag',
    defaultValue: false
  },
  updatedAt: {
    type: Date,
    label: 'Last date this was updated.',
    autoValue: function () {
      if (this.isInsert) {
        return new Date();
      } else if (this.isSet) {
        this.unset();
      }
    }
  },
});
