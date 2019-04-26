const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/wikistack', {
    logging: false
});


db.authenticate().
    then(() => {
    console.log('connected to the database');
})

const Page = db.define('page', {
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    slug: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    content: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    status: {
        type: Sequelize.ENUM('open', 'closed')
    }
});

Page.beforeValidate(function(page, options) {
    page.slug = page.title.replace(/\s+/g, '_').replace(/\W/g, '')
  })
  

const User = db.define('user', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.TEXT,
        validate: {
            isEmail: true
        },
        allowNull: false
    }
});


module.exports = {
    db, // why??
    Page,
    User
};
