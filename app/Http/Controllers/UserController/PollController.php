<?php

namespace App\Http\Controllers\UserController;

use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use App\Http\Requests\PollRequest;
use App\Http\Controllers\Controller;
use App\Interfaces\PollRepositoryInterface;

class PollController extends Controller
{
    private PollRepositoryInterface $pollRepository;

    public function __construct(PollRepositoryInterface $pollRepository)
    {
        $this->pollRepository = $pollRepository;
    }
    
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(): JsonResponse
    {
        return response()->json([
            'data' => $this->pollRepository->index(),
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(PollRequest $request): JsonResponse
    {       
        return response()->json([
            'data' => $this->pollRepository->create($request),
        ], 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id): JsonResponse
    {
        return response()->json([
            'data' => $this->pollRepository->show($id)
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(PollRequest $request, $id): JsonResponse
    {
        return response()->json([
            'data' => $this->pollRepository->update($request, $id)
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id) : JsonResponse
    {
        if(!($this->pollRepository->destroy($id)))
        {
            return response()->json([
                'message' => 'Sorry, no poll find with the id provided!'
            ], 404);
        }

        return response()->json([
            'message' => 'Poll deleted successfully!',
        ]);
    }
}
