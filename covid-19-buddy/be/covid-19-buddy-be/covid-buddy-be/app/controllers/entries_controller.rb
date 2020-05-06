class EntriesController < ApplicationController
  #before_action :set_entry, only: [:show, :update, :destroy]
  skip_before_action :require_login, only: [:index]

  # GET /entries
  def index
    @entries = Entry.all
    render json: @entries
  end

  # GET /entries/1
  def show
    @entry = Entry.find(params[:id])
    render json: @entry
  end

  # POST /entries
  def create
    @entry = Entry.new(entry_params)

    if @entry.save
      render json: @entry, status: :created, location: @entry
    else
      render json: @entry.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /entries/1
  def update
    if @entry.update(entry_params)
      render json: @entry
    else
      render json: @entry.errors, status: :unprocessable_entity
    end
  end

  # DELETE /entries/1
  def destroy
    @entry.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_entry
      @entry = Entry.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def entry_params
      params.require(:entry).permit(:suicidal_urges_boolean,:sib_urges_boolean, :sadness_level, :skills,  :happiness_level, :anxiety_level, :ed_level,   :details,  :mood, :used_skills_boolean, :dysphoria_level, :anger_level, :time, :date, :user_id)
    end
end

#t.boolean :suicidal_urges_boolean,
#t.boolean :sib_urges_boolean
#
#t.integer :sadness_level
#t.integer :happiness_level
#t.integer :anxiety_level
#t.integer :anger_level
#t.integer :dysphoria_level
#t.integer :ed_level
#
#t.boolean :used_skills_boolean
#t.string :mood
#t.string :details
#t.string :skills
