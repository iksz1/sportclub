<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Resources\CommentResource;
use App\Comment;

class CommentsController extends Controller
{

    protected $commentRules = [
        'content' => 'required|string|max:500',
    ];

    /**
     * 
     * @param  Request $request
     * @return App\Comment
     */
    public function store(Request $request)
    {
        $this->validate($request, $this->commentRules);
        $comment = $request->user()->writeComment(new Comment($request->all()));
        return response()->json(new CommentResource($comment), 201);
    }

    public function getAll()
    {
        return CommentResource::collection(Comment::all());
    }
}
