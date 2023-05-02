class MangasController < ApplicationController
    def index # refer to routes.rb for name
        @mangas = Manga.all
    end

    def show
        @manga = Manga.find params[:id]
    end

    def new
    end

    def create
        manga = Manga.create :name => params[:name], :authors => params[:authors], :status => params[:status], :published => params[:published], :description => params[:description], :image => params[:image]

        redirect_to manga_path(manga.id)
    end

    def edit
        @manga = Manga.find params[:id]
    end

    def update
        manga = Manga.find params[:id]
        manga.update :name => params[:name], :authors => params[:authors], :status => params[:status], :published => params[:published], :description => params[:description], :image => params[:image]
        redirect_to manga_path(manga.id)
    end

    def destroy
        manga = Manga.find params[:id]
        manga.destroy
        redirect_to mangas_path
    end
end