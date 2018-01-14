class InitDefaultTaxonomyVocabularies < ActiveRecord::Migration[5.1]
  def change
    built_in_vocabularies = {
        topic: 'Topic',
        tag: 'Tag'
    }
    built_in_vocabularies.each do |vocabulary_name, vocabulary_desc|
      TaxonomyVocabulary.create(name: vocabulary_name, description: vocabulary_desc)
    end
  end
end
