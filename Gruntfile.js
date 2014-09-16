
module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),



    handlebars: {
      compile: {
        options: {
          namespace: "templates",
          processName: function(filePath) {
            var name = "";
            filePath = filePath.split(".");
            filePath = filePath[0].split("/");
            name += filePath[2];
            for (var i = 3; i < filePath.length; i++) {
                name += "/" + filePath[i];
            };
            return name;
          }
        },
        files: {
          "build/js/templates.js": ["src/templates/**/*.hbs"]
        }
      }
    },



    sass: {
      compile: {
        files: {
            'build/css/all.css': 'src/scss/all.scss',
        }
      }
    },

    
    coffee: {
      compile: {
        files: {
          'build/js/app.js': 'src/coffee/**/*.coffee',
        }
      },
    },


    connect: {
      server: {
        options: {
          port: 2333,
          base: './build/',
          open: true,
          livereload: true,
          middleware: function(connect, options, middlewares) {
            
            // middlewares.push(function(req, res, next) {
            //   res.write(grunt.file.read('index.html'));
            //   res.end();
            // });

            return middlewares;
          }
        }
      }
    },


    watch: {
      options: {
        livereload: true
      },
      build_pages: {
        files: ['src/pages/**/*.html'],
        tasks: ['build_pages'],
      },
      build_posts: {
        files: ['src/blog/**/*.hbs'],
        tasks: ['build_posts'],
      },
      handlebars: {
        files: 'src/templates/**/*.hbs',
        tasks: ['handlebars'],
      },
      sass: {
        files: 'src/scss/**/*.scss',
        tasks: ['sass'],
        options: {
          livereload: false
        }
      },
      css: {
        files: 'build/css/all.css'
      },
      coffee: {
        files: 'src/coffee/**/*.coffee',
        tasks: ['coffee'],
      },
    },


    divshot: {
      server: {
        options: {
          port: 2444,
          hostname: 'localhost',
          root: './build/',
          clean_urls: true,
          routes: {
            '**': 'index.html'
          },
          cache_control: {}
        }
      }
    }


  });



  grunt.loadNpmTasks('grunt-contrib-handlebars');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-coffee');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');


  grunt.registerTask('build_pages', 'Build pages.', function() {
    var config = grunt.file.readJSON('src/pages/pages.json');
    var pages = config.pages;
    
    for (var i = 0; i < pages.length; i++) {
      grunt.log.writeln('Building page: '+pages[i].file);
      
      var html = "";
      html += grunt.file.read('src/pages/'+config.head)+grunt.util.linefeed;
      for (var j = 0; j < pages[i].layout.length; j++) {
          html += grunt.file.read('src/pages/'+pages[i].layout[j])+grunt.util.linefeed;
      };
      html += grunt.file.read('src/pages/'+config.footer);

      grunt.file.write('build/'+pages[i].file, html);
    };
  });


  grunt.registerTask('build_posts', 'Build posts.', function() {
    var config = grunt.file.readJSON('src/pages/pages.json');
    var posts = grunt.file.readJSON('src/blog/blog.json').posts;
    Handlebars = require('handlebars');
    var template, html = null;

    for (var i = 0; i < posts.length; i++) {
      grunt.log.writeln('Building post: blog/'+posts[i].file);
      post_template = Handlebars.compile(grunt.file.read('src/blog/'+posts[i].source));
      layout_template = Handlebars.compile(grunt.file.read('src/blog/'+posts[i].layout));
      
      html = "";
      html += grunt.file.read('src/pages/'+config.head)+grunt.util.linefeed;
      html += layout_template({posts: posts, content: post_template(posts[i])})+grunt.util.linefeed;
      html += grunt.file.read('src/pages/'+config.footer);

      grunt.file.write('build/blog/'+posts[i].file, html);
    };
  });




  grunt.registerTask('default', ['handlebars', 'build_pages', 'build_posts', 'sass', 'coffee', 'connect', 'watch']);

};



