const gulp = require("gulp");
gulp.task("default", () =>
	gulp.src("./app/scss");//de que carpeta o carpetas cojo la informacion
	.pipe(plugin1)
	.pipe(plugin2)
	.pipe(plugin3)
	.pipe(gulp.dest("./dist/css");//a que carpeta o carpetas mando la informacion)
);


gulp.task("default"), () => {
	gulp.watch("./app/scss", ["myTask"]);//supervisa que funcione gulp
});


