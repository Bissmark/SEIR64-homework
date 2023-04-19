# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2023_04_19_100113) do

  create_table "confectioneries", force: :cascade do |t|
    t.text "name"
    t.text "group"
    t.integer "energy"
    t.integer "protein"
    t.integer "fat"
    t.integer "carbs"
    t.text "image"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "manufacturers", force: :cascade do |t|
    t.text "name"
    t.text "founded"
    t.text "founder"
    t.text "country"
    t.text "image"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
