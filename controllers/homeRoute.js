const router = require('express').Router();
const { User, Post, Comment } = require('../models');


router.get('/', (req, res)=> {
    Post.findAll({
        attributes: [
            'id',
            'title',
            'post_text',
            'created_at'
        ],

        include: [{
            model: Comment,
            attributes: [
                'id',
                'post_id',
                'user_id',
                'comment_text',
                'created_at'
            ],
            include: {
                model: User,
                attributes: ['username']
            
            },

            model: User,
            attributes: ['username']

        }]
    })
})