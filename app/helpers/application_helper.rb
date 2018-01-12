module ApplicationHelper
  def flash_message_type(key)
    type = case key
           when 'alert'
             'warning'
           else
             key
           end
    type
  end
end
