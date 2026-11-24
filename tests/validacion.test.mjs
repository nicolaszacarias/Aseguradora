// Ejecutar: node tests/validacion.test.mjs
import assert from "node:assert/strict";
import { campos, validar, armarResumen } from "../src/components/formulario/validacion.js";
const c = (n) => campos.find((x) => x.name === n);

assert.match(validar(c("dni"), ""), /Completá/);
assert.equal(validar(c("dni"), "30.123.456"), "");
assert.ok(validar(c("dni"), "12ab"));
assert.equal(validar(c("patente"), "AB 123 CD"), "");
assert.equal(validar(c("patente"), "abc123"), "");
assert.ok(validar(c("patente"), "ZZZZ"));
assert.equal(validar(c("email"), "prueba@ejemplo.com"), "");
assert.ok(validar(c("email"), "prueba@"));
assert.ok(validar(c("fecha_siniestro"), "2999-01-01"));
assert.equal(validar(c("poliza"), ""), "");               // opcional
assert.ok(validar(c("descripcion"), "corto"));
assert.ok(validar(c("privacidad"), false));
assert.equal(validar(c("privacidad"), true), "");
const r = armarResumen({ nombre_asegurado: "Persona de Prueba", hubo_tercero: "No", tercero_patente: "XXX999" });
assert.ok(r.includes("Persona de Prueba") && !r.includes("XXX999")); // campo condicional oculto no se incluye
console.log("validacion: OK");
