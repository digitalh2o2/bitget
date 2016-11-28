class ApplicationController < ActionController::Base
 protect_from_forgery with: :exception
 before_action :configure_permitted_parameters, if: :devise_controller?
 skip_before_action :verify_authenticity_token

 after_filter :set_csrf_cookie
 respond_to :json

 # Allows cookies with csrf token to post delete update
 def set_csrf_cookie
   cookies['XSRF-TOKEN'] = form_authenticity_token if protect_against_forgery?
 end

 def index
 end

 protected
  def verified_request?
    super || valid_authenticity_token?(session, request.headers['X-XSRF-TOKEN'])
  end
end
