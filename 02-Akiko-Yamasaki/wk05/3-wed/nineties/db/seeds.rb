Artist.destroy_all

Artist.create(:name => 'Ride', :city => 'Oxford', :formed => 1988, :reformed => '2014-present', :image =>'https://i.discogs.com/n5iSp3lGOMJc_lg6nV_9uTgX7BgQSj4Pt0V2QP_M60s/rs:fit/g:sm/q:90/h:387/w:526/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9BLTEwMTM4/LTExNzI0MDkzNzgu/anBlZw.jpeg')
Artist.create(:name => 'Pale Saints', :city => 'Leeds', :formed => 1987, :reformed => 'never', :image =>'https://i.discogs.com/f52j7ZN_-KT5ohdre7R4lmNo0Yyvs83_HY_lXGc0MKc/rs:fit/g:sm/q:90/h:450/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9BLTg4NzEx/LTEyMjM4NTA0MjAu/anBlZw.jpeg')
Artist.create(:name => 'Lush', :city => 'London', :formed => 1987, :reformed => '2015-2016', :image =>'https://i.discogs.com/3j2xxs84wPPRMaK0C3PYClf1CkdEIP9R2JNJH1hYV3o/rs:fit/g:sm/q:90/h:702/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9BLTIwNjk2/LTE0ODA3MTc0NjEt/MTU0Ny5qcGVn.jpeg')
Artist.create(:name => 'Comet Gain', :city => 'Oxford', :formed => 1992, :reformed => 'always active', :image =>'https://i.discogs.com/7l46lGi_4MVEQ4ir2p5zWdvCttEWl0AEclkAKatQqh0/rs:fit/g:sm/q:90/h:395/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9BLTI5MTk0/OC0xNTcyMTU5NTA2/LTEzOTQuanBlZw.jpeg')
Artist.create(:name => 'Teenage Fanclub', :city => 'Glasgow', :formed => 1989, :reformed => 'always active', :image =>'https://i.discogs.com/oMCFpYdwNJMoKifPT4h37voDu7E8YXmpsIxaTKb8L_M/rs:fit/g:sm/q:90/h:700/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9BLTEwNzA3/NS0xNTMyODcwNTAz/LTU0MDkuanBlZw.jpeg')
Artist.create(:name => 'The Charlatans', :city => 'West Midlands', :formed => 1988, :reformed => 'always active', :image =>'https://i.discogs.com/kM9Tku9G_j45hMuYRagPbRgJxiuH96quIY4xE0U6OOo/rs:fit/g:sm/q:90/h:475/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9BLTQ5MDIz/LTE1MTkxMzQ2MDQt/OTIwNS5qcGVn.jpeg')
Artist.create(:name => 'Saint Etienne', :city => 'London', :formed => 1990, :reformed => 'always active', :image => 'https://i.discogs.com/jx0KYFbXh3xIGAMQlD-U5Xo11wLTC7TBvJvuInoJjxc/rs:fit/g:sm/q:90/h:458/w:474/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9BLTI4MDct/MTI2OTc3NDkzOC5q/cGVn.jpeg')


Album.destroy_all

Album.create(:title => 'Going Blank Again', :year => 1992, :single => 'Twisterella', :image => 'https://i.discogs.com/2wGjP5eYo4n0Ks8HuSGYnDCQbuR-4hBcw7cna7ooHEg/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTM4MTgw/OC0xNTY2MDQwMDU1/LTg4NTkuanBlZw.jpeg')
Album.create(:title => 'Comfort of Madness', :year => 1990, :single => 'Sight of You', :image => 'https://i.discogs.com/8NTbEK-3LnUvo6B-zAYnsljaw2MHzSoH7GH2T5Qq3J8/rs:fit/g:sm/q:90/h:486/w:500/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTM5Mzg5/NC0xMTQ5NTE4MDM3/LmpwZWc.jpeg')
Album.create(:title => 'Spooky', :year => 1991, :single => 'Superblast!', :image => 'https://i.discogs.com/KvhpY91CqEBOfBNFNNxL-VYTpoHc_xm5NZrpJj-Jnhk/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTM4ODQ4/OS0xNDk1NDgyOTE4/LTI5NTguanBlZw.jpeg')
Album.create(:title => 'Magnetic Poetry', :year => 1997, :single => 'Strength', :image => 'https://i.discogs.com/1ZCpAe-RVx8FrSBOTBl7l-xGgIytYRDafZzNSaLGooI/rs:fit/g:sm/q:90/h:599/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI1NDY2/NjQtMTQ5OTQyNDE1/OC00NTY0LmpwZWc.jpeg')
Album.create(:title => 'Bandwagonesque', :year => 1991, :single => 'Star Sign', :image => 'https://i.discogs.com/NbULzBCXb4cVvEsEvIxWBuXEzHNkTb4wxE6Qcgf_QKg/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTgzNDUy/OS0xMjU5MDAxOTky/LmpwZWc.jpeg')
Album.create(:title => 'Some Friendly', :year => 1990, :single => 'White Shirt', :image => 'https://i.discogs.com/Xq0c0fl9x20tv093dJvZdwT8YL4Pvszg2x78thePLg4/rs:fit/g:sm/q:90/h:590/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTYxNTcy/NTYtMTQxMjUzMzU5/OS03NTU2LmpwZWc.jpeg')
