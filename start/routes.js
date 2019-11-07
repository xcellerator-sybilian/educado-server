'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

// Home
Route.get('/', 'HomeController.index')

/** Token */
Route.group(() => {
  // Request
  Route.post('/request', 'RequestController.request').validator('RequestTokenValidator')
  // Refresh
  Route.post('/refresh', 'RefreshController.refresh').validator('RefreshTokenValidator')
}).namespace('Token').prefix('token').middleware('guest')

/** Users */
Route.group(() => {
  // Browse users
  Route.get('/', 'BrowseController.browse')
  // Read user
  Route.get('/:id', 'ReadController.read')
  // Edit user
  Route.put('/:id', 'EditController.edit').validator('UserValidator')
  // Add user
  Route.post('/', 'AddController.add').validator('UserValidator')
  // Delete user
  Route.delete('/:id', 'DeleteController.delete')
}).namespace('User').prefix('users').middleware('auth')

/** School */
Route.group(() => {
  // Browse schools
  Route.get('/', 'BrowseController.browse')
  // Read school
  Route.get('/:id', 'ReadController.read')
  // Edit school
  Route.put('/:id', 'EditController.edit').validator('SchoolValidator')
  // Add school
  Route.post('/', 'AddController.add').validator('SchoolValidator')
  // Delete school
  Route.delete('/:id', 'DeleteController.delete')
}).namespace('School').prefix('schools').middleware('auth')

/** Lender */
Route.group(() => {
  // Browse lenders
  Route.get('/', 'BrowseController.browse')
  // Read lender
  Route.get('/:id', 'ReadController.read')
  // Edit lender
  Route.put('/:id', 'EditController.edit').validator('LenderValidator')
  // Add lender
  Route.post('/', 'AddController.add').validator('LenderValidator')
  // Delete lender
  Route.delete('/:id', 'DeleteController.delete')
}).namespace('Lender').prefix('lenders').middleware('auth')

/** Student */
Route.group(() => {
  // Browse students
  Route.get('/', 'BrowseController.browse')
  // Read student
  Route.get('/:id', 'ReadController.read')
  // Edit student
  Route.put('/:id', 'EditController.edit').validator('StudentValidator')
  // Add student
  Route.post('/', 'AddController.add').validator('StudentValidator')
  // Delete student
  Route.delete('/:id', 'DeleteController.delete')
}).namespace('Student').prefix('students').middleware('auth')
