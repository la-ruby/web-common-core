class ExampleJob < ApplicationJob
  queue_as :default

  # example
  # ExampleJob.set(wait: 5.seconds).perform_later
  def perform(*example)
    Rails.logger.info "Performed"
  end
end
