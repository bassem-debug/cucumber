import assert from 'assert'
import ParameterType from '../src/ParameterType'
import CombinatorialGeneratedExpressionFactory from '../src/CombinatorialGeneratedExpressionFactory'

describe('CucumberExpressionGenerator', () => {
  it('generates multiple expressions', () => {
    const parameterTypeCombinations = [
      [
        new ParameterType(
          'color',
          /red|blue|yellow/,
          null,
          s => s,
          false,
          true
        ),
        new ParameterType(
          'csscolor',
          /red|blue|yellow/,
          null,
          s => s,
          false,
          true
        ),
      ],
      [
        new ParameterType(
          'date',
          /\d{4}-\d{2}-\d{2}/,
          null,
          s => s,
          false,
          true
        ),
        new ParameterType(
          'datetime',
          /\d{4}-\d{2}-\d{2}/,
          null,
          s => s,
          false,
          true
        ),
        new ParameterType(
          'timestamp',
          /\d{4}-\d{2}-\d{2}/,
          null,
          s => s,
          false,
          true
        ),
      ],
    ]

    const factory = new CombinatorialGeneratedExpressionFactory(
      'I bought a {%s} ball on {%s}',
      parameterTypeCombinations
    )
    const expressions = factory.generateExpressions().map(ge => ge.source)
    assert.deepStrictEqual(expressions, [
      'I bought a {color} ball on {date}',
      'I bought a {color} ball on {datetime}',
      'I bought a {color} ball on {timestamp}',
      'I bought a {csscolor} ball on {date}',
      'I bought a {csscolor} ball on {datetime}',
      'I bought a {csscolor} ball on {timestamp}',
    ])
  })
})
