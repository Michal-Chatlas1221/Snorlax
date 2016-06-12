require 'capybara'
require 'capybara/rspec'

def sign_up_user(user, password)
  visit 'localhost:1234/'
  expect(page).to have_content 'Snorlax'

  click_link 'Register'
  expect(page).to have_content 'Register'

  fill_in 'username', with: user
  fill_in 'password', with: password

  click_button 'Register'
end

describe 'The signup process', type: :feature, js: true do
  it 'signs me in' do
    sign_up_user("user-#{Random.rand}", "password-#{Random.rand}")

    expect(page).to have_content 'All shows'
  end
end

describe 'Logout', type: :feature, js: true do
  it 'signs out the user' do
    sign_up_user("user-#{Random.rand}", "password-#{Random.rand}")

    visit 'localhost:1234/logout'

    expect(page).not_to have_content 'All shows'
    expect(page).to have_content 'logout successful'
  end
end

describe 'Sign in', type: :feature, js: true do
  it 'signs in the user' do
    user = "user-#{Random.rand}"
    password = "password-#{Random.rand}"
    sign_up_user(user, password)

    visit 'localhost:1234/logout'
    visit 'localhost:1234/'

    click_link 'Log in'

    fill_in 'username', with: user
    fill_in 'password', with: password

    click_button 'Log in'

    expect(page).to have_content 'All shows'
  end
end

describe 'Show list', type: :feature, js: true do
  it 'displays the list of followed shows' do
    sign_up_user("user-#{Random.rand}", 'password12345')

    expect(page).to have_link 'Followed shows'
    click_link 'Followed shows'

    expect(page).to have_css('h1', text: 'Followed shows')
  end

  it 'display the show page after clicking the link' do
    sign_up_user("user-#{Random.rand}", 'password12345')

    link = all('ul a').first
    show_name = link.text
    link.click

    expect(page).to have_content show_name
    expect(page).to have_content 'Description'
    expect(page).to have_content 'Average rating'
  end
end
