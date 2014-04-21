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
      handlebars: {
        files: 'src/templates/**/*.hbs',
        tasks: ['handlebars'],
      },
      sass: {
        files: 'src/scss/**/*.scss',
        tasks: ['sass'],
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
    },

    'divshot:push:development': {
      options: {
        root: './build/'
      }
    },

    'divshot:push:staging': {
      options: {
        root: './build/'
      }
    },

    'divshot:push:production': {
      options: {
        root: './build/'
      }
    }


  });



  grunt.loadNpmTasks('grunt-contrib-handlebars');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-coffee');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-divshot');


  grunt.registerTask('build_pages', 'Build pages.', function() {
    var pages = grunt.file.readJSON('src/pages/pages.json').pages;
    
    for (var i = 0; i < pages.length; i++) {
      grunt.log.writeln('Building page: '+pages[i].file);
      
      var html = "";
      for (var j = 0; j < pages[i].layout.length; j++) {
          html += grunt.file.read('src/pages/'+pages[i].layout[j])+grunt.util.linefeed;
      };

      grunt.file.write('build/'+pages[i].file, html);
    };
  });




  grunt.registerTask('default', ['handlebars', 'build_pages', 'sass', 'coffee', 'connect', 'watch']);
  grunt.registerTask('push:dev', ['handlebars', 'build_pages', 'sass', 'coffee','divshot:push:development']);
  grunt.registerTask('push:staging', ['handlebars', 'build_pages', 'sass', 'coffee','divshot:push:staging']);
  grunt.registerTask('push:production', ['handlebars', 'build_pages', 'sass', 'coffee','divshot:push:production']);

};



